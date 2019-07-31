import 'mocha';
import { assert } from 'chai';
import Node from '../../src/Node/Node';
import NodeDescription from '../../src/Node/NodeDescription';
import NodeFactory from '../../src/Node/NodeFactory';
import GethNode from '../../src/Node/GethNode';

describe('ChainFactory.build()', () => {

  it('returns a utility chain for a utility id', () => {
    const ids = [
      '200',
      '1409',
    ];

    for (const id of ids) {
      const nodeDescription = new NodeDescription(id);
      nodeDescription.originChain = 'ropsten';
      const node: Node = NodeFactory.create(nodeDescription);
      assert.instanceOf(node, GethNode);
    }
  });
});
